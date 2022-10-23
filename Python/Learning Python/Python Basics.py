#Variables = hold pieces of information that can change over time such as numbers, text, and boolians
#Variables can contain Ints and Floats

#represents how much money I have
from cgi import print_arguments


wallet = 123.54
print (wallet)

#spent $20
wallet = 103.54
print (wallet)

#Variables challenge - make a vairable called day and set it equal to the date of the month
day = 21
print (day)


#Ints or Integers = whole numbers that do not contain decimals

day = 22
temp = 15
temp = -15

print(3+6)
print(day + 3)

#Floats = do contain decimals
weight = 190.4

print (weight * 2)
print (weight / 2)
print (weight - 2)

# Ints and Floats challenge - Find something around you in your life to represent an int and a float. Put them in variables
computers = 3
devices = 2
print (computers + devices)

bitcoin = 3.000003
print(bitcoin)

#strings
shirt = "black"
print(shirt)

store = "Junior's Taco Shop, the 'best' there is"
print(store)

# stings challenage - Put the name of a movie you like into a variable called movie
movie = "Thor Ragnarok"
print(movie)

#Vairables and strings
day = 22 
month = 'October'
temp = 64
print(f'Today is {month} {day} and it is {temp} degrees outside')

#Challenage - make a variable called day_name and set it to day of the week like Tuesday and add it to the string we print
day_name = 'Saturday'
print(f'Today is {day_name} {month} {day} and it is {temp} degrees outside')

#boolian and If statements
light_is_on = False

if light_is_on: 
    print("The light is on!")

#Challenage - find something around you that could be represented by a boolean and make a variable for it

Rocky_is_a_Dog = True
if Rocky_is_a_Dog:
    print("Rocky is the best dog")

#Comparison and else
if light_is_on: 
    print("The light is on!")
else:
    print("We're in the dark")

weight = 190

if weight < 195:
    print("You're under weight")

#challenge - make a variable age, and if someone is 18 years or older, print that they are an adult otherwise print that they are a child

age = 22

if age >= 18:
    print("You are a adult")
else:
    print ("You are a child")

import random
from tkinter.messagebox import YES
from tokenize import maybe 
#random int
print(random.randint(1,10))

#random float
print(random.random())

#challenge - make your own sersion of a magic 8 ball that prints yes, no, or maybe each time you ask it

answer = random.randint(1,3)

if answer == 1:
    print("Yes")
if answer == 2:
    print("No")
if answer == 3:
    print("Maybe")
