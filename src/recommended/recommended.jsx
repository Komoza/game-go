export const Recommended = () => {
    const handleClickSlider = () => {
        console.log('click');
    }
  return (
    <div className="recommended">
      <div className="recommended__text">Recommended</div>
      <div className="recommended__wrap">
        <div className="recommended__card --big recommended__image recommended__image--the-witcher-3">
          <div className="recommended__name">The Witcher 3: Wild Hunt</div>
        </div>
        <div className="recommended__card --big recommended__image recommended__image--elden-ring">
          <div className="recommended__name">Elden Ring</div>
        </div>
        <div className="recommended__card --small recommended__image recommended__image--death-stranding">
          <div className="recommended__name">Death Stranding</div>
        </div>
        <div className="recommended__card --small recommended__image recommended__image--overwatch">
          <div className="recommended__name">Overwatch</div>
        </div>
        <div className="recommended__card --small recommended__image recommended__image--god-of-war">
          <div className="recommended__name">God of War</div>
        </div>
      </div>
      <div className="recommended__pagination">
        <div
          className="recommended__slider recommended_slider_1 recommended__slider--active"
          onClick={handleClickSlider}
        >
          1
        </div>
        <div
          className="recommended__slider recommended_slider_2"
          onClick={handleClickSlider}
        >
          2
        </div>
        <div
          className="recommended__slider recommended_slider_3"
          onClick={handleClickSlider}
        >
          3
        </div>
      </div>
    </div>
  );
};
