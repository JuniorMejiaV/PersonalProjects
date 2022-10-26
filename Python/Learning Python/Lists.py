fav_movies = ["Sandlot", "Thor", "Iron Man"]

#Grab first item, LISTS USE ZERO BASED COUNTING
print(fav_movies[0])

#Challenge Make a list of your favorite numbers and print the first number from your list
Fav_numbers = [234,62,24]
print(Fav_numbers[2])

#Len - how many items are in the list
print(len(fav_movies))

#how to add to the list
fav_movies.append("Captain America")
print(len(fav_movies))

#new item in a spacific place
fav_movies.insert(1,"Batman")
print(fav_movies)

#Delete a item
del(fav_movies[0])
print(fav_movies)

#Challenge - remove enough items from fav_movies until there's only one movie left
del(fav_movies[0])
del(fav_movies[2])
del(fav_movies[1])
print(fav_movies)