export const Content = () => {
    const handleClickSlider = () => {
        console.log('click');
    }
  return (
    <div className="content">
      <div className="content__wrap">
        <div className="content__card --big">
          <div className="content__name">Lorem ipsum dolor sit amet.</div>
          <div className="content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            architecto. Maxime officiis impedit, aut voluptatum officia modi
            consectetur veniam esse?
          </div>
        </div>
        <div className="content__card --big">
          <div className="content__name">Lorem ipsum dolor sit amet.</div>
          <div className="content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            architecto. Maxime officiis impedit, aut voluptatum officia modi
            consectetur veniam esse?
          </div>
        </div>
        <div className="content__card --small">
          <div className="content__name">Lorem ipsum dolor sit amet.</div>
          <div className="content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            architecto. Maxime officiis impedit, aut voluptatum officia modi
            consectetur veniam esse?
          </div>
        </div>
        <div className="content__card --small">
          <div className="content__name">Lorem ipsum dolor sit amet.</div>
          <div className="content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            architecto. Maxime officiis impedit, aut voluptatum officia modi
            consectetur veniam esse?
          </div>
        </div>
        <div className="content__card --small">
          <div className="content__name">Lorem ipsum dolor sit amet.</div>
          <div className="content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            architecto. Maxime officiis impedit, aut voluptatum officia modi
            consectetur veniam esse?
          </div>
        </div>
      </div>
      <div className="content__pagination">
        <div
          className="content__slider content_slider_1 content__slider--active"
          onClick={handleClickSlider}
        >
          1
        </div>
        <div
          className="content__slider content_slider_2"
          onClick={handleClickSlider}
        >
          2
        </div>
        <div
          className="content__slider content_slider_3"
          onClick={handleClickSlider}
        >
          3
        </div>
      </div>
    </div>
  );
};
