
#def bark():
    #print("Woof woof!")
#bark()

#for x in range(1):
    #bark()

#Challenge - vreate a fucntion called hello that prints "Hello Junior"
#def Hello():
    #print("Hello Junior!")
#Hello()

#Parameters
#def Hello(name):
    #print(f"Hello {name}!")
#Hello("Junior")

#def add_numbers(num1, num2):
    #print(num1 + num2)
#add_numbers(4,8)

#Challenge create a function called dog_info that takes in a dogs age and prints a sentence about the dog
#def dog_Info(name, age):
    #print(f"{name} is almost {age} years old")
#dog_Info("Rocky", 2)

#returns
#def double(number):
    #return number *2

#new_number = double(5)

#print(new_number)

#Challenege - create a function that returns a string in all caps

#def upper(text):
    #print(upper("junior"))

#name = ["nick", 'junior', 'rocky']

#for name in name:
    #print(upper("nick"))
   # print(upper("junior"))
    #print(upper("rocky"))

#inputs
user_text = input("Enter some text: ")

upper_or_lower = input('Enter 1 to uppercase and 2 to lowercase: ')
if upper_or_lower == "1":
    print(user_text.upper())
else:
    print(user_text.lower())