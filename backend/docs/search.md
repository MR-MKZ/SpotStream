## Search in spotify

You can search in spotify with this route, all you need is a query.

**URL** : `/api/spotify/search`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide a query to search.

```json
{
    "query": "search query"
}
```

**Data example** All fields must be sent.

```json
{
    "query": "Faded Alan walker"
}
```

## Success Response

**Condition** : If everything is OK and search has result.

**Code** : `200 OK`

**Content example**

```json
{
    "result": [
        {
            "artists": [
                {
                    "external_urls": {
                        "spotify": "Spotify artist url"
                    },
                    "href": "spotify api url for artist",
                    "id": "artist id",
                    "name": "artist name",
                    "type": "artist",
                    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
                }
            ],
            "name": "music name",
            "id": "music id",
            "duration": "music duration in seconds [number]",
            "href": "music api url [Need for download music in dl api]",
            "preview_url": "music preview download url"
        },
    ]
}
```

## Error Responses

**Condition** : If query has some problems.

**Code** : `400 BAD REQUEST`

**Content**

```json
{
    "message": "error message"
}
```

### Or

**Condition** : If we had some problems in the server.

**Code** : `500 INTERNAL SERVER ERROR`

**Content example**

```json
{
    "message": "An unexpected error occurred. Please try again later."
}
```