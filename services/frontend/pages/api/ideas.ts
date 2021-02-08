const handler = async (req: any, res: any) => {
  const d: Response = await fetch("http://localhost:8080/v1/ideas", {
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

  const idea = await d.json();

  res.status(200).json({ idea });
};

export default handler;
