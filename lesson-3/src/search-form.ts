import { renderBlock } from "./lib.js";
import { SearchFormData } from "./search-form-type.js";
import { baseUrl } from "./API/index.js";
import {renderSearchResultsBlock} from './search-results.js'

const ONE_MONTH = 1;
const TWO_MONTH = 2;

export function renderSearchFormBlock(checkin?: Date, checkout?: Date) {
  const formatDate = (date: Date) => {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    );
  };

  const userCheckin = new Date(checkin);
  const formatUserCheckin = formatDate(userCheckin);
  const userCheckout = new Date(checkout);
  const formatUserCheckout = formatDate(userCheckout);

  const today = new Date();

  const minCheckin = formatDate(today);
  const minCheckout = new Date(today.setDate(today.getDate() + 1));
  const minCheckoutDay = formatDate(minCheckout);

  const maxCheckMonth = new Date(today.setMonth(today.getMonth() + 1));
  const lastDayMaxCheckMonth = new Date(
    maxCheckMonth.getFullYear(),
    maxCheckMonth.getMonth() + 1,
    0
  );
  const maxCheck = formatDate(lastDayMaxCheckMonth);

  const getFormValue = (e) => {
    e.preventDefault();

    const dataValue: SearchFormData = {
      city: (<HTMLInputElement>document.getElementById("city")).value,
      checkIn: (<HTMLInputElement>document.getElementById("check-in-date"))
        .value,
      checkOut: (<HTMLInputElement>document.getElementById("check-out-date"))
        .value,
      price: (<HTMLInputElement>document.getElementById("max-price")).value,
    };
    console.log(dataValue);
    funcSearch(dataValue);
  };

  const funcSearch = (data: SearchFormData): void => {
    console.log(data);
  };

  renderBlock(
    "search-form-block",
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
        <form name="check">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${formatUserCheckin} min=${minCheckin} max=${maxCheck} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${formatUserCheckout} min=${minCheckoutDay} max=${maxCheck} name="checkout" />
          </div>
          </form>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="btn-search">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
  const form = document.querySelector("form");
  form.addEventListener("submit", getFormValue);

  const btnSearch = document.getElementById("btn-search");
  btnSearch.addEventListener<"click">("click", (event: MouseEvent) => {
    event.preventDefault();
    fetchPlases();
  });

  function fetchPlases() {
    const coordinates = "59.9386,30.3141";
    const checkInDate = checkin;
    const checkOutDate = checkout;

    fetch(
      baseUrl +
        `/places?coordinates=${coordinates}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&maxPrice=10000`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        renderSearchResultsBlock(data);
      });
  }
}
