import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="fixed-bottom-fixed">
      <div className="sectionFooter border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Следите за нами в социальных сетях:</span>
        </div>

        <div>
          <a href="" className="me-4">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4">
            <MDBIcon color="secondary" fab icon="whatsapp" />
          </a>
        </div>
      </div>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Яблоко раздора
              </h6>
              <p>
                По всем интересующимся вопросам обращайтесь в нашу поддержку ...
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Магазин</h6>
              <p>
                <a href="#!" alt="Каталог товаров" className="linkFooter">
                  Каталог товаров
                </a>
              </p>
              <p>
                <a href="#!" alt="Как сделать заказ" className="linkFooter">
                  Как сделать заказ
                </a>
              </p>
              <p>
                <a href="#!" alt="Способ оплаты" className="linkFooter">
                  Способ оплаты
                </a>
              </p>
              <p>
                <a href="#!" alt="Скачать каталог" className="linkFooter">
                  Скачать каталог
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Личный кабинет</h6>
              <p>
                <a href="#!" alt="Личный кабинет" className="linkFooter">
                  Личный кабинет
                </a>
              </p>
              <p>
                <a href="#!" alt="История заказов" className="linkFooter">
                  История заказов
                </a>
              </p>
              <p>
                <a href="#!" alt="Избранное" className="linkFooter">
                  Избранное
                </a>
              </p>
              <p>
                <a href="#!" alt="Косметологам" className="linkFooter">
                  Косметологам
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                г.Волгоград
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@GreenApple.yandex.ru
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 7
                904 000 99 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center  p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="linkFooter fw-bold" href="#" alt="GreenApple.ru">
          GreenApple.ru
        </a>
      </div>
    </MDBFooter>
  );
}
