// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
} node;

// TODO: Choose number of buckets in hash table
const unsigned int N = 2000;

// Hash table
node *table[N];

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // TODO
    // hash word to get index
    unsigned int index = hash(word);

    // point list at the first node of the linked list
    node *list = table[index];

    // use the index to go through the linked list at that index location
    // until ptr is NULL we loop and reset list value to list->next

    // check if list->word == word, if it does return true. else reset list to list->next to move to and check next node
    while (list != NULL)
    {
        if (strcasecmp(list->word, word) == 0)
        {
            return true;
        }
        else
        {
            list = list->next;
        }
    }

    // if we get to whole link list without finding the word, return false
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function

    unsigned int value = 0;

    // loop through each char and add the index value (0-25) to value
    for (int i = 0, n = strlen(word); i < n; i++)
    {
        value += toupper(word[i]);
    }

    return value % N;
}

// variable to keep track of number of words in dictionary
unsigned int num_words = 0;

// Loads dictionary into memory, returning true if successful, else false
// creates hash table by reading from dictionary file, calling hash function, creating node for every word, and inserting that node
// into the linked list at its bucket
bool load(const char *dictionary)
{
    // TODO
    // Open dictionary file to read from
    FILE *file = fopen(dictionary, "r");
    if (file == NULL)
    {
        return false;
    }

    // create buffer to read strings into
    char buffer[LENGTH + 1];
    // initialize pointer for new node
    node *n = NULL;
    // initialize index for the hash table
    int index;

    // read strings from file one at a time
    while (fscanf(file, "%s", buffer) != EOF)
    {
        // create new node
        n = malloc(sizeof(node));
        if (n == NULL)
        {
            num_words = 0;
            return false;
        }

        // add string to the node
        strcpy(n->word, buffer);

        // get index for array using hash function
        index = hash(buffer);

        // insert node into the linked list of that array index returned by hash function
        n->next = table[index];
        table[index] = n;

        // increase num_words value
        num_words++;
    }

    fclose(file);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    // TODO

    return num_words;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    // TODO

    // loop through the hash table array to access each linked list and then free each node of each linked list
    for (int i = 0; i < N; i++)
    {
        // list points at first node of linked list
        node *n = table[i];

        // iterate through whole linked list and free each node
        while (n != NULL)
        {
            node *tmp = n;
            n = tmp->next;
            free(tmp);
        }
    }

    return true;
}
