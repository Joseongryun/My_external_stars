# Terms


## Knowledge base
  - Position-independent code<sub>(instructions being self-contained and ready to take over control of a processor regardless of its current state)</sub>
  - Lazy binding
    - PLT(procedure linkage table)
    - GOT(global offset table)

## Exploit techs
  - Memory corruption
    - Integer overflow
    - Buffer overflow<sup>＝buffer overrun</sup><sub>[@](https://en.wikipedia.org/wiki/Buffer_overflow)</sub>
    - Stack overflow
    - FSB(format string bug)<sub>[@](http://resources.infosecinstitute.com/format-string-bug-exploration)</sub>
    - Heap corruption<sub>[@](http://homes.soic.indiana.edu/yh33/Teaching/I433-2016/lec13-HeapAttacks.pdf)</sub>
      - Heap-based overflow<sup>?</sup>
      - Heap buffer overflow
      - Double free bug
    - ROP(return oriented programming)
      - GOT(global offset table) overwrite
      - RTL(return to libc) attack<sub>[@](https://en.wikipedia.org/wiki/Return-to-libc_attack)</sub>
        - RTL chaining

## Anti-exploit techs
  - NX bit(No-eXecute)<sup>∋DEP(data execution prevention)</sup><sub>[@](http://s2kiess.blog.me/220027464834)[@](https://en.wikipedia.org/wiki/NX_bit)</sub>
  - ASCII armor<sub>[@](http://s2kiess.blog.me/220028141641)</sub><sup>≠[binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding)</sup>
  - ASLR(address space layout randomization)<sub>[@](https://en.wikipedia.org/wiki/Address_space_layout_randomization)</sub>
  - StackShield
  - StackGuard
  - SSP(stack-smashing protection)<sub>[@](https://en.wikipedia.org/wiki/Buffer_overflow_protection#GNU_Compiler_Collection_.28GCC.29)</sub>
    - Stack Canary
  - PIE(position independant executable)
  - RELRO(relocation read-only)
