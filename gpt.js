
const { Configuration, OpenAIApi } = require("openai");

const configiration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: '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',
});


console.log('<<---gpt-3.5-turbo model---->>');
console.log('*- MK-T...');

const openai = new OpenAIApi(configiration);



const runGPT35 = async (prompt) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
    });
    console.log(response.data.choices[0].message.content);
};

runGPT35("점심메뉴추천해줘 매운걸로");