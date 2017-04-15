# Why?
## 1; Why do I have to use `;cat |`?

# 'cause
## [1](http://satanel001.tistory.com/82)
만약 쉘코드를 사용해서 페이로드를 작성한다면 `(python -c 'print "~~"';cat) | ./input` 이런식으로 `;cat`을 붙여 줘야 한다.
파이썬 스크립트가 출력하는 과정에서 마지막에 EOF를 넣기 때문이다. 스크립트가 정상적으로 쉘을 띄우더라도 그 쉘이 EOF를 만나서 꺼져 버린다고 한다.

## 2<sup>Got to know on April 14th, 2017.</sup>
1. `python` and the executable are runned and the `python` is piped to the executable.
2. After the `python` is terminated, `cat`, an executable that keeps receiving input, is runned with piped to the executable.
3. The `cat` is terminated.
4. The executable is terminated.

```
python ---+
          |
      (pipe 1)
          |
          +----- ./executable
          |
      (pipe 2)
          |
cat ------+
```
