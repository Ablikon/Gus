import React from "react";
import './Categories.css'



const Categories = () => {
    return (
<div className='main-container'>
      <div className='shop-sidebar'>
        <div className='shop-sidebar-1'>
          <div className='heading'>
            <div className='pseudo' />
            <span className='category'>Category</span>
          </div>
          <div className='facets-header'>
            <span className='selected'>0 selected</span>
            <div className='link'>
              <span className='reset'>Reset</span>
            </div>
          </div>
          <div className='list'>
            <div className='item-label'>
              <div className='filter-name'>
                <span className='air-fryer'>Air Fryer</span>
              </div>
              <span className='count'>(1)</span>
              <div className='field' />
            </div>
            <div className='item-label-2'>
              <div className='filter-name-3'>
                <span className='air-fryer-4'>Air Fryer</span>
              </div>
              <span className='item'>(1)</span>
              <div className='span-field' />
            </div>
            <div className='checkbox-label'>
              <div className='filter-name-5'>
                <span className='air-fryer-6'>Air Fryer</span>
              </div>
              <span className='item-7'>(1)</span>
              <div className='span-field-8' />
            </div>
            <div className='checkbox-label-9'>
              <div className='filter-name-a'>
                <span className='dslr-camera'>Dslr camera</span>
              </div>
              <span className='item-b'>(1)</span>
              <div className='span-field-c' />
            </div>
            <div className='checkbox-label-d'>
              <div className='filter-name-e'>
                <span className='earbuds'>Earbuds</span>
              </div>
              <span className='item-f'>(1)</span>
              <div className='span-field-10' />
            </div>
            <div className='checkbox-item-label'>
              <div className='filter-name-11'>
                <span className='game-controller'>Game controller</span>
              </div>
              <span className='count-12'>(1)</span>
              <div className='span-field-13' />
            </div>
            <div className='checkbox-item-label-14'>
              <div className='filter-name-15'>
                <span className='hand-mixer'>Hand mixer</span>
              </div>
              <span className='count-16'>(1)</span>
              <div className='span-field-17' />
            </div>
            <div className='checkbox-item-label-18'>
              <div className='filter-name-19'>
                <span className='air-fryer-1a'>Air Fryer</span>
              </div>
              <span className='count-1b'>(1)</span>
              <div className='span-field-1c' />
            </div>
          </div>
        </div>
        <div className='heading-1d'>
          <div className='pseudo-1e' />
          <span className='price'>Price</span>
        </div>
        <div className='facets-header-1f'>
          <span className='highest-price'>The highest price is $84.00</span>
          <div className='link-20'>
            <span className='reset-21'>Reset</span>
          </div>
        </div>
        <div className='price-range'>
          <div className='price-range-group' />
          <div className='price-input-group'>
            <div className='price-range-input'>
              <span className='label-from'>From</span>
              <div className='flex-row-da'>
                <input className='input' />
                <span className='dollar-sign'>$</span>
                <span className='zero'>0</span>
              </div>
            </div>
            <div className='price-range-input-22'>
              <span className='label-to'>To</span>
              <div className='flex-row-aab'>
                <input className='input-23' />
                <span className='dollar-sign-24'>$</span>
                <span className='shop-sidebar-25'>84</span>
              </div>
            </div>
            <span className='text-1d'>-</span>
          </div>
        </div>
      </div>
      <div className='shop-sidebar-26'>
        <div className='heading-27'>
          <div className='pseudo-28' />
          <span className='tags'>Tags</span>
        </div>
        <div className='facets-header-29'>
          <span className='selected-2a'>0 selected</span>
          <div className='link-2b'>
            <span className='reset-2c'>Reset</span>
          </div>
        </div>
        <div className='item-label-2d'>
          <div className='filter-name-2e'>
            <span className='air-fryer-2f'>Electrolyte</span>
          </div>
          <span className='count-30'>(16)</span>
          <div className='field-31' />
        </div>
      </div>
    </div>
    
    );
};

export default Categories;