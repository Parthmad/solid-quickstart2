async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/prediction/5209eae0-447d-4e73-83db-64f518b187d9",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});
