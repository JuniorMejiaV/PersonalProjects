lorem_Ipsum = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet leo in ligula congue, vitae suscipit sapien elementum. Donec turpis nibh, feugiat sed laoreet at, porttitor id leo. Sed vulputate convallis venenatis. Cras rutrum, risus at congue bibendum, mi dolor cursus tortor, eu pretium libero dolor ut neque. Mauris pharetra velit ac est feugiat fermentum. Integer sagittis venenatis eros vel mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Donec metus dui, blandit eu purus non, tempor auctor justo. Nam sollicitudin vehicula ipsum vitae congue. Maecenas sagittis auctor tortor sit amet malesuada. Suspendisse ut nisl maximus, mollis metus vitae, elementum tortor. Praesent sit amet auctor erat. Nulla vulputate, nisi sed rhoncus ultricies, augue diam ullamcorper quam, sit amet laoreet arcu risus at tellus. Phasellus sit amet augue augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.
"""

#Amount of characters
#print(len(lorem_Ipsum))

#Amount of words
#print(len(lorem_Ipsum.split()))


#Word Counter
letters = """a b c B a a a b """
print(letters.split())

word_count = {}
for word in lorem_Ipsum.lower().split():
    if word in word_count:
        word_count[word] += 1
    else: 
        word_count[word] = 1

print(word_count)