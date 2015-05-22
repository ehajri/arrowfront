var liveDb = new LiveMysql({
  host        : 'localhost',
  user        : 'dev2',
  password    : '123kdd',
  database    : 'stock',
  serverId    : 34,
  minInterval : 200
});

var closeAndExit = function() {
  liveDb.end();
  process.exit();
};

// Close connections on hot code push
process.on('SIGTERM', closeAndExit);
// Close connections on exit (ctrl + c)
process.on('SIGINT', closeAndExit);

Meteor.publish('RQuotes', function(){
  return liveDb.select(
    'SELECT R1.* FROM `RQuotes` R1 INNER JOIN (SELECT `ticker_id`, MAX(`timestamp`) `timestamp` FROM `RQuotes` GROUP BY `ticker_id`) R2 ON R1.ticker_id = R2.ticker_id AND R1.timestamp = R2.timestamp WHERE `trade` != 0 ORDER BY `trade` DESC',
    [ { table: 'rquotes' } ]
  );
});

Meteor.publish('News', function(){
  return liveDb.select(
    'SELECT * FROM `News` WHERE `date` > CURRENT_DATE ORDER BY `timestamp` DESC',
    [ { table: 'news' } ]
  );
});

Meteor.publish('test', function(){
  return liveDb.select(
    'SELECT * FROM `test`',
    [ { table: 'test' } ]
  );
});

Meteor.publish('OBook', function(){
  return liveDb.select(
    'SELECT * FROM OBook WHERE createdon >= CURRENT_DATE ORDER BY `timestamp` DESC LIMIT 50',
    [ { table: 'obook' } ]
  );
});

Meteor.publish('TimeSale', function(){
  return liveDb.select(
    'SELECT * FROM TimeSale WHERE `datetime` >= CURRENT_DATE ORDER BY `timestamp` DESC',
    [ { table: 'timesale' } ]
  );
});

Meteor.publish('running', function(){
  return liveDb.select(
    'SELECT * FROM running ORDER BY `lastrun` DESC',
    [ { table: 'running' } ]
  );
});
