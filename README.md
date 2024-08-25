# Pokémon API

Welcome to the Pokémon API project! This API allows you to manage Pokémon data, including creating, retrieving, updating, and deleting Pokémon entries. This project is part of a learning journey through the MEAN stack (MongoDB, Express, Angular, Node.js).

## Endpoints

### 1. Create a New Pokémon

- **Endpoint:** `/pokemon/create`
- **Method:** `POST`
- **Summary:** Create a new Pokémon entry.
- **Request Body:**
  {
    "name": "Jigglypuff",
    "type": "Normal/Fairy",
    "owner": "Jiggly"
  }
- **Responses:**
  - **201 Created:** Successfully created the Pokémon.
    {
      "id": 16,
      "name": "Jigglypuff",
      "type": "Normal/Fairy",
      "owner": "Jiggly"
    }
  - **400 Bad Request:** Missing required fields.

### 2. Get All Available Pokémon

- **Endpoint:** `/pokemon`
- **Method:** `GET`
- **Summary:** Retrieve a list of all Pokémon.
- **Responses:**
  - **200 OK:** Successfully retrieved the list of Pokémon.
    [
      {
        "id": 1,
        "name": "Pikachu",
        "type": "Electric",
        "owner": "Ash"
      },
      {
        "id": 2,
        "name": "Charmander",
        "type": "Fire",
        "owner": "Brock"
      }
    ]

### 3. Get Pokémon by ID

- **Endpoint:** `/pokemon/{id}`
- **Method:** `GET`
- **Summary:** Retrieve a Pokémon entry by its ID.
- **Parameters:**
  - **id:** The ID of the Pokémon (integer).
- **Responses:**
  - **200 OK:** Successfully retrieved the Pokémon.
    {
      "id": 2,
      "name": "Charmander",
      "type": "Fire",
      "owner": "Brock"
    }

### 4. Delete a Pokémon by ID

- **Endpoint:** `/pokemon/delete/{id}`
- **Method:** `DELETE`
- **Summary:** Delete a Pokémon entry by its ID.
- **Parameters:**
  - **id:** The ID of the Pokémon (integer).
- **Responses:**
  - **200 OK:** Successfully deleted the Pokémon.
    {
      "message": "Pokemon deleted"
    }
  - **404 Not Found:** Pokémon not found.

### 5. Update a Pokémon by ID

- **Endpoint:** `/pokemon/update/{id}`
- **Method:** `PUT`
- **Summary:** Update a Pokémon entry by its ID.
- **Parameters:**
  - **id:** The ID of the Pokémon (integer).
- **Request Body:**
  {
    "name": "Raichu",
    "type": "Electric",
    "owner": "Ash"
  }
- **Responses:**
  - **200 OK:** Successfully updated the Pokémon.
    {
      "id": 1,
      "name": "Raichu",
      "type": "Electric",
      "owner": "Ash"
    }
  - **404 Not Found:** Pokémon not found.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   git clone https://github.com/yourusername/pokemon-api.git
   cd pokemon-api

2. Install dependencies:
   npm install

3. Set up your MongoDB connection. Update the MongoDB URI in the configuration file (`config.js` or `.env`).

4. Start the server:
   npm start

5. The API will be available at `http://localhost:3000`.

## Testing

You can use tools like Postman or cURL to test the endpoints.

## License

do whatever you want with this.

## Contributing

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.
