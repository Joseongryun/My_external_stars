# Terms


## Knowledge base
  - Call stack<sub>[@](https://en.wikipedia.org/wiki/Call_stack)</sub>
    - Stack frame
      - SFP(saved frame pointer)
  - Position-independent code<sub>[@](https://en.wikipedia.org/wiki/Position-independent_code)</sub>
  - Lazy binding
    - PLT(procedure linkage table)
    - GOT(global offset table)

## Exploit techs
  - Exploits on Linux
    - Shared library hijacking<sub>[@](http://sosal.tistory.com/125)</sub>
  - Memory corruption
    - Integer overflow
    - Buffer overflow<sup>＝buffer overrun</sup><sub>[@](https://en.wikipedia.org/wiki/Buffer_overflow)[@](http://research.hackerschool.org/Datas/Research_Lecture/overflow.txt)</sub>
      - Saved frame pointer overflow<sub>[@](http://research.hackerschool.org/Datas/Research_Lecture/sfp.txt)</sub>
      - Fake EBP
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
  - Executable-space protection<sub>[@](https://en.wikipedia.org/wiki/Executable_space_protection)</sub>
    - DEP(data execution prevention)<sub>: executable space protection on Windows</sub>
      - NX bit(No-eXecute)<sub>[@](http://s2kiess.blog.me/220027464834)[@](https://en.wikipedia.org/wiki/NX_bit)</sub>
  - ASCII armor<sub>[@](http://s2kiess.blog.me/220028141641)</sub><sup>≠[binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding)</sup>
  - ASLR(address space layout randomization)<sub>[@](https://en.wikipedia.org/wiki/Address_space_layout_randomization)</sub>
  - StackShield
  - StackGuard
  - SSP(stack-smashing protection)<sub>[@](https://en.wikipedia.org/wiki/Buffer_overflow_protection#GNU_Compiler_Collection_.28GCC.29)</sub>
    - Stack Canary
  - PIE(position independant executable)
  - RELRO(relocation read-only)
  - SEHOP(structured exception handler overwrite protection)<sub>: a feature of Windows; [@](https://support.microsoft.com/ko-kr/help/956607/how-to-enable-structured-exception-handling-overwrite-protection-sehop-in-windows-operating-systems)[!](https://support.microsoft.com/ko-kr/help/956607/how-to-enable-structured-exception-handling-overwrite-protection-sehop-in-windows-operating-systems)</sub>
