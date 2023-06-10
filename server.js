const express = require('express');
const app = express();

//서버 실행시 터미널> node server.js >종료시 Ctrl+c

////파이썬쉘 -- py파일 실행
// const {PythonShell} = require('python-shell');
// var options = {
//   mode: 'text',
//   pythonPath: 'C:\\Users\\ChangHyeon\\anaconda3\\python',
//   pythonOptions: ['-u'],
//   scriptPath: 'C:/Users/ChangHyeon/Desktop/mk_T',
//   args: ['arg1','arg2']
// };

const { Configuration, OpenAIApi } = require("openai");

const configiration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: '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',
});


console.log('<<---gpt-3.5-turbo model---->>');
console.log('*- MK-T...');

const openai = new OpenAIApi(configiration);



//listen(서버 포트번호, 띄운 후 실행할 코드)
app.listen(8031, function(){
    console.log('listening on 8080');

});

//get('/경로',방문시 경로에 관한 코드실행)

// app.get('/test',function(req,res){
    
//     const runGPT35 = async (prompt) => {
//         const response = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: prompt }],
//         });
//         console.log(response.data.choices[0].message.content);
//     };
    
//     runGPT35("점심메뉴추천해줘 매운걸로");


// });

// /하나만쓸경우 홈페이지
app.get('/',function(req,res){

    // res.sendFile(__dirname+'/index.html');
    const runGPT35 = async (prompt) => {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });
        res.send(response.data.choices[0].message.content);
    };
    
    runGPT35("점심메뉴추천해줘 매운걸로");



});