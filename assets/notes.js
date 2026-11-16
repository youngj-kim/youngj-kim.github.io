// GitHub remains the editor and authentication boundary. This only prepares a new file URL.
document.querySelectorAll('[data-new-post]').forEach(link => {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  }).formatToParts(new Date()).map(part => [part.type, part.value]));
  const date = `${parts.year}-${parts.month}-${parts.day}`;
  const filename = `${date}-new-note-${parts.hour}${parts.minute}${parts.second}.md`;
  const content = '---\ntitle: "새 글 제목"\ncategory: NOTES\nsummary: "글 목록에 표시할 짧은 소개"\nlang: ko\npublished: true\n---\n\n## 해결하려던 문제\n\n본문을 작성하세요.\n\n## 데이터와 접근 방법\n\n\n## 확인한 내용\n\n\n## 남은 과제\n\n';
  const query = new URLSearchParams({filename, value: content});
  link.href = `https://github.com/youngj-kim/youngj-kim.github.io/new/main/_posts?${query}`;
});
