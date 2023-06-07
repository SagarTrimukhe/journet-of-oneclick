from fastapi import FastAPI

app = FastAPI()


publishers = [
    {
        "id": "9d8dde26-b60a-40c6-8893-900e7a4ef8fc",
        "name": "Pearson Education",
        "revenue": "$6.070 billion",
    },
    {
        "id": "b6b26df9-3e4b-40a5-b3da-2ab23a8259c1",
        "name": "RELX Group",
        "revenue": "$5.609 billion",
    },
    {
        "id": "c562efc6-bfa2-4fe8-aed6-157fdda7b2f0",
        "name": "Thomson Reuters",
        "revenue": "$4.941 billion",
    },
    {
        "id": "0fb939d9-1e46-41f3-95dd-5d8441fd6e6d",
        "name": "Bertelsmann",
        "revenue": "$4.240 billion",
    },
    {
        "id": "6e35e665-6720-42ec-9efd-2d30fb6d8827",
        "name": "Wolters Kluwer",
        "revenue": "$3.994 billion",
    },
    {
        "id": "7effa4c9-d77b-47fc-8bff-c2e0c65bb5e4",
        "name": "Grupo Planeta",
        "revenue": "$1.974 billion",
    },
    {
        "id": "1cd0b1e5-0ee5-4bdb-b875-bf392c74c502",
        "name": "Springer Nature",
        "revenue": "$1.956 billion",
    },
    {
        "id": "a34130ce-ab86-4383-92b2-4225119981e9",
        "name": "Scholastic",
        "revenue": "$1.742 billion",
    },
    {
        "id": "586a5ef2-3008-4654-bbe5-b49c4b2ffd74",
        "name": "McGraw-Hill Education",
        "revenue": "$1.719 billion",
    },
]


@app.get("/publishers", status_code=200)
def get_publishers():
    return {
        "items": publishers,
        "metadata": {
            "title": "The Ten Largest Publishing Companies in the World",
            "source": "https://www.tharawat-magazine.com/facts/ten-largest-publishing-companies/",
        },
    }
