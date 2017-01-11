# Terms


## Knowledge base
  - Lazy binding
    - PLT(procedure linkage table)
    - GOT(global offset table)

## Exploit techs
  - ROP(return oriented programming)
    - GOT(global offset table) Overwrite
    - RTL(return to libc)
      - RTL chaining
  - Buffer overflow
  - Stack overflow

## Anti-exploit techs
  - [NX bit(No-eXecute)<sup>∋DEP(data execution prevention)</sup>](https://en.wikipedia.org/wiki/NX_bit)
  - ASCII armor<sup>≠[binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding)</sup>
  - ASLR(address space layout randomization)
  - Stack shield
  - Stack guard
  - SSP(stack smashing protection)
  - PIE(position independant executable)
  - Stack Canary
  - RELRO(relocation read-only)
