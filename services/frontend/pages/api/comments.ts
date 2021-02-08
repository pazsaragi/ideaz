const handler = async (req: any, res: any) => {
  const d: Response = await fetch("http://localhost:8080/v1/comments", {
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

  const comment = await d.json();

  res.status(200).json({ comment });
};

export default handler;
