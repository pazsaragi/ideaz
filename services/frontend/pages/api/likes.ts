const handler = async (req: any, res: any) => {
  const d: Response = await fetch(process.env.BACKEND + "/v1/likes", {
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (d.status != 200) {
    res.status(400).json({
      error: d.statusText,
    });
    return;
  }

  const like = await d.json();

  res.status(200).json({ like });
};

export default handler;
