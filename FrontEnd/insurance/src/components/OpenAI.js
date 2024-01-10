import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";

function OpenAI() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const config = new Configuration({
      organization: "org-XIHXjbcXmQcosB5Nxb3GF2YK",
      apiKey: "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",
    });

    const openai = new OpenAIApi(config);
    let object = {
      name: "r",
      email: "abc@gmail.com",
      dob: "2023-11-27T01:12:53.994Z",
      height: "10",
      weight: "120",
      bloodGroup: "ABNEGATIVE",
      employment: "employed",
      dependent: 0,
      annualIncome: 25000,
      otherIncome: "nil",
      healthHistory: "nil",
      familyHistory: "nil",
      existingInsurance: "nil",
      smoking: "yes",
      policyTerm: 6,
    };
    let price1 = 225;
    let price2 = 215;
    let price3 = 200;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            object +
            "For the above json recommend the best package out of the following:\n\n" +
            "1. Premium (price per month = $" +
            price1 +
            ")\n" +
            "2. Super (price per month = $" +
            price2 +
            ")\n" +
            "3. Basic (price per month = $" +
            price3 +
            ")\n\n" +
            "The packages are based on the factors from above json:\n" +
            "1. Premium: dependent\n" +
            "2. Super: weight\n" +
            "3. Basic: smoking\n\n" +
            "Recommend in one word",
        },
      ],
    });

    console.log(completion.data.choices[0].message.content);
    setResponse(completion.data.choices[0].message.content);
  };
}

export default OpenAI;

// {"name":"r","email":"abc@gmail.com","dob":"2023-11-27T01:12:53.994Z","height":"10","weight":"45","bloodGroup":"ABNEGATIVE","employment":"employed","dependent":0,"annualIncome":25000,"otherIncome":"nil","healthHistory":"nil","familyHistory":"nil","existingInsurance":"nil","smoking":"yes","policyTerm":6}

// For the above json recommend the best package out of the following:
// 1. Gold (price per month = $225)
// 2.Silver (price per month = $215)
// 3. Bronze (price per month = $200)

// The packages are based on the factors from above json:
// 1. Gold: dependent
// 2. Silver: weight
// 3. Bronze: smoking

// Recommend in one word
