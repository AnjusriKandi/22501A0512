async function Log(stack, level, pkg, message){
  const payload = {
    stack,
    level,
    package: pkg,
    message,
  };

  try {
    await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Failed to send log:", error);
  }
}