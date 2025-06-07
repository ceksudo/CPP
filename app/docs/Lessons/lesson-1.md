---
sidebar_position: 1
---

# Lesson 1 Source Code

Examples of code snippet for day 1 workshop with the file name like `name.cpp`

1. `ex0.cpp` 
```cpp
#include <stdio.h>

int main() {
    printf("Hello World\n");

    return 0;
}

```

2. `ex1.cpp`
```cpp
#include "stdio.h"

int main() {
    printf("Welcome to OSTL10\n");

    return 0;
}

```

3. `ex2.cpp`
```cpp
#include <iostream>

int main() {
    std::cout << "Welcome to introduction to modern c++ programming\n";
    return 0;
}
```

4. `ex3.cpp`
```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "You are the future engineers\n";

    return 0;
}
```

5. `ex4.cpp`
```cpp
#include <stdio.h>

int main() {
    int a = 5;
    double b = 6.6;
    char c[] = "Love";

    printf("%d %lf %s \n", a, b, c);

    return 0;
}
```
6. `ex5.cpp`
```cpp
#include <iostream>

int main() {
    int age = 55;
    float price = 77.8;
    char name[] = "Paul";

    std::cout << age << " " << price << " " << name << "\n";
    return 0;
}
```

7. `ex6.cpp`
```cpp
#include <print>

int main() {
    std::print("Welcom to {} in the year {}\n", "OSTL10", 2025);

    return 0;
}
```