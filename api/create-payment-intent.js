require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "INR",
      payment_method_types: ["card"],
    });

    res.statusCode = 200;
    res.send({
      message: "success",
      paymentIntent: paymentIntent,
    });
  } catch (error) {
    console.log(error);
    res.statusCode = 400;
    res.send({ error: error.message });
  }
};

export default handler;
