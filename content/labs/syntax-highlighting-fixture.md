---
title: "Syntax highlighting fixture"
short_title: "Highlight fixture"
draft: true
nav: labs
track: python
eyebrow: "Build-only test fixture"
heading: "C and Python Syntax Highlighting"
subheading: "Not published by a normal Hugo build"
credit: "KIPR · Botball Explorer · Syntax highlighting test fixture"
---

## Shortcode C override

{{< code lang="c" >}}

#include <kipr/wombat.h>
int main()
{
	int speed = @@750@@;  // highlighted value
	return 0;
}
{{< /code >}}

## Page-default Python shortcode

{{< code >}}

#!/usr/bin/python3
import _kipr as k

@@@staticmethod@@
def report(score: int) -> str:
    message = f"Score: {score}"
    return @@message@@  # highlighted name
{{< /code >}}

## Fenced Python

```python
def drive(speed):
    k.motor(0, speed)
```
