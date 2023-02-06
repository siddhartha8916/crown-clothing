const helloWorld = (req, res) => {
  res.statusCode = 200;
  res.send({ message: "helloWorld" });
};

export default helloWorld;
