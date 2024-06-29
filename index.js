import express from "express";
import bodyParser from "body-parser";
import LlamaAI from "llamaai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const llamaAPI = new LlamaAI(process.env.API_KEY);

app.options("/invoke", cors());

app.post("/invoke", cors(), async (req, res) => {
    const info = req.body.transactions;
	console.log(info);
	const request = {
		messages: [{ role: "user", content: JSON.stringify(info) }],
		functions: [
			{
				name: "suggest_improvement",
				description:
					"Based on the given list of the user's income and expenses, suggest some ways for the user to improve their money managing capabilities. These changes could be pointing out specific issues with the way their daily expense looks, as well as giving tips and advice on how to save more money. Cite sources if you quote anything from the internet.",
				parameters: {
					type: "object",
					properties: {
						changes: {
							type: "string",
							description:
								"Tips and advice on how to structure their daily expense better based on the given user's data.",
						},
						sources: {
							type: "string",
							description:
								"Cite some useful sources on the net to read from and educate oneself, e.g. if a user spends too much, direct them to content to manage overspending, etc. Don't mention the url to the links directly, mention the article name, website name or book name. Don't use quotes anywhere within your response.",
						},
					},
				},
				required: ["sources", "changes"],
			},
		],
		stream: false,
		function_call: "suggest_improvement",
	};
	try {
		const response = await llamaAPI.run(request);
		console.log(response.choices[0].message.function_call.arguments);
		res.json({ data: response.choices[0].message.function_call.arguments });
	} catch (error) {
		console.error(error);
		//res.render("index.ejs", { msg: "exception caught!" });
	}
})

app.listen(port, () => {
    console.log(`all ears on port ${port}`);
})

