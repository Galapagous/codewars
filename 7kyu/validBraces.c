#include <stdio.h>
#include <stdbool.h>

 bool valid_braces (const char *braces, int count)
{
  if (!count)
  return (false);
  if (count % 2 != 0)
	return false;
  for (int i = 0; i < count / 2; i++)
  {
    if (braces[i] == braces[count - 1 - i])
    return (true);
  }
  for (int j = 0; j < count; j + 2)
  {
    if (braces[j] == braces[j + 1])
    return (true);
  }
}

int main()
{
  char myString[] = "(){}[]";
  int count = 0;
  while (myString[count != '\0'])
  count++;
 valid_braces(myString, count);
}
