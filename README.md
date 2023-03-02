# 🥁 Keyboard-Drum
 Play the drums on your keyboard!

- 드럼 만들기 구현
- 키보드 입력으로 오디오 재생
- 클릭으로 오디오 재생

![image](https://user-images.githubusercontent.com/87015084/222454834-27fa1f73-8f65-4e0e-8686-6badb5430f53.png)

# Skill
### 유사 배열 객체

- 배열이 아닌데 배열인척 하는 객체
- ``querySelectorAll``로 dom을 선택하는 경우 Nodelist가 반환된다.
- 유사배열객체는 ``Array.from`` 을 사용해 배열로 만들 수 있다.

### keycode
https://keycode.info/

- 키보드 입력으로 keycode를 알 수 있는 사이트

### 오디오 재생 객체 : Audio()
  audio라는 변수를 선언해 Audio 객체를 생성하고, ``play()`` 메소드를 사용하여 음악 재생시킨다.
- ``audio.src = "my_audio.mp3";`` : audio의 경로를 지정(URL)
- ``audio.loop = true;`` : audio 반복 재생
- ``audio.currentTime = 0`` : audio의 재생시점 설정
