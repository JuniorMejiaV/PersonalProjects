#for loops

for number in range(1):
    print("Hello")

Fav_movies = ["Thor", "Iron Man", "Captain America", "Hulk"]

for movie in Fav_movies:
    print(movie)

#Challenge Loop 40 times and print the number of the loop times 2. 2,4,6,8...
#for x in range (40):
    #print((x + 1) * 2)

#Dictionary
dogs = {"Rocky": 2, "Eviee":3, "Remi":3}

#add to dictionary
dogs["Max"] = 14

#Delete to dictionary
del(dogs["Eviee"])

print(dogs["Max"])

#Challenge - create a dictionary with ints for keys and booleans for balues
age = {22:True, 25:False, }
print(age[21])