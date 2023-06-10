import os
import openai
openai.api_key = "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"

  # messages=[
  #       {"role": "system", "content": "You are a helpful assistant."},
  #       {"role": "user", "content": "Who won the world series in 2020?"},
  #       {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
  #       {"role": "user", "content": "Where was it played?"}
  #   ]

messages=[]



user_content = input("요구사항 입력 :") 
user_content += "위의 내용에서 객체와 관계를 추출해줘"
messages.append({"role":"user","content": f"{user_content}"})

completion = openai.ChatCompletion.create(model="gpt-3.5-turbo",messages=messages)

assistant_content = completion.choices[0].message['content']

messages.append({"role":"user","content": f"{assistant_content}"})

print(f"\nGPT : {assistant_content}")

