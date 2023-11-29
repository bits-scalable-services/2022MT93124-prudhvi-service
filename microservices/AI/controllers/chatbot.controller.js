import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: "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"
});

class Chat {
    static async createChatMessage(req, res, next) {
        try {
            console.log(req.body.message, "================");
            let input = req.body.message;
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: 'user', content: input }],
                // stream: true
            })
            console.log("++++++++++++++++++", response.choices[0]?.message.content);
            return res.status(200).json({ success: true, data: `${response.choices[0]?.message.content}`, message: `chat fetched succesfully` });

            // return response.choices[0]?.message.content;


        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}

export default Chat;