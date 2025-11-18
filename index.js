import core from "@actions/core";
import whois from "whois";
import util from "util";

const lookup = util.promisify(whois.lookup);

async function run() {
  try {
    const url = core.getInput("url");

    if (!url) {
      core.setFailed("Please provide a website URL.");
      return;
    }

    const data = await lookup(url);
    console.log("Raw WHOIS data:\n", data);

    // Basit parse örneği (registrar ve country çekelim)
    const registrarMatch = data.match(/Registrar:\s*(.*)/i);
    const countryMatch = data.match(/Country:\s*(.*)/i);

    console.log("Registrar:", registrarMatch ? registrarMatch[1] : "Not found");
    console.log("Country:", countryMatch ? countryMatch[1] : "Not found");

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
