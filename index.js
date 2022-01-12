const message = 'enter pin for PINO and win for WINSTON';
const argvArr = process.argv;

if(argvArr.length < 3 || (argvArr.length > 2 && (argvArr[2] !== 'pin' && argvArr[2] !== 'win'))){
   console.log(message);
   return;
}

let logger = null;
if(argvArr[2] === 'pin'){
 logger = require('./pino-logger');
} else if(argvArr[2] === 'win'){
  logger= require('./winston-logger');
}

const limit = 5;
const startTime = new Date().getTime();
for(let i = 0; i<= limit;i++){
  logger.info(`hello ${i}`);
}
console.log(`time taken: ${new Date().getTime() - startTime}`);
