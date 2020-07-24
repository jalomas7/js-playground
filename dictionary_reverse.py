myDictionary = {'A': '1', 'B': '2', 'C': '3'}
# what we want here is {'1': 'A', '2': 'B', '3': 'C'}

def reverseDictionary(dictionary):
    reverseDictionary = {}
    for key in dictionary.keys():
        reverseDictionary[dictionary[key]] = key
    return reverseDictionary

print('myDictionary', myDictionary)
print('myReversedDictionary', reverseDictionary(myDictionary))