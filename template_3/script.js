var theater = theaterJS();

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('typing')
  })

theater
  .addActor('scene1', { speed: 1, accuracy: 1 })
  .addActor('scene2', { speed: 1, accuracy: 1 })
  .addActor('scene3', { speed: 1, accuracy: 1 })
  .addScene('scene1:Hi.', 800)
  .addScene('scene2:I\'m a web developer and this is my personal webpage.', 800)
  .addScene('scene3:Here you will find my latest selected work and thoughts on my passion for coding.')