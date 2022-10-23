import random

lucky_number = random.randint(1,300)

fortune_number = random.randint(1,3)

fortune_text = ''

if fortune_number == 1:
    fortune_text = 'You will have a great day!'
if fortune_number == 2:
    fortune_text = 'Today will be tough... but worth it.'
if fortune_number == 3:
    fortune_text = 'Today you will have a bad day...'

print(f'{fortune_text} Your luck number is: {lucky_number}')