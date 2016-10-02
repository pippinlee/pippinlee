// get all work items
$('content').html(
  Object.keys(work).map(function(item) {
    return `
    <!-- new portfolio item -->
    <div class="container item" style="border-bottom: 30px solid ${work[item].color}; box-shadow: 0 0 1px 0 ${work[item].shadow1} ,0 1px 10px 0 ${work[item].shadow2}">
      <div class="row">
        <div class="col-sm-12 item-image bg-image" id="`+ item +`" style="background-image: url('${work[item].images[0]}')">

        </div>
      </div>

      <!--
      <div class="row views">
        <button class="col-sm-4 hidden-md hidden-lg view-btn desktop" id="desktop-` + item +`">
          <img class="icons" src="../../img/work/desktop-y.svg" />
        </button>
        <button class="col-sm-4 hidden-md hidden-lg view-btn phone" id="phone-` + item +`">
          <img class="icons" src="../../img/work/iphone-y.svg" />
        </button>
        <button class="col-sm-4 hidden-md hidden-lg view-btn tablet" id="tablet-` + item +`">
          <img class="icons" src="../../img/work/ipad-y.svg" />
        </button>
      </div>
      -->

      <div class=" details-heading">
        <h2 class="col-sm-12 col-md-6 item-title" style="color: ${work[item].color}">
          ${work[item]["item-title"]}
        </h2>
      </div>

      <div class="permalink col-sm-12 hidden-md hidden-lg">
        <div class="col-sm-2 item-link">
          <img class="share-icon" src="../img/work/share-b.svg" />
        </div>
        <div class="link-icon col-sm-10">
          <a class="item-anchor" href=${work[item]["item-anchor"]}>${work[item]["item-link"]}</a>
        </div>
      </div>

      <div class="permalink hidden-sm pull-right">
        <div class="col-md-2 item-link">
          <img class="share-icon" src="../img/work/share-b.svg" />
        </div>
        <div class="link-icon col-md-2">
          <a class="item-anchor" target='_blank' href=${work[item]["item-anchor"]}>${work[item]["item-link"]}</a>
        </div>
      </div>

      <div class="">
        <h2 class="col-sm-12 col-md-6 item-description-title">
          Description
        </h2>
      </div>

      <div class="">
        <h2 class="col-md-6 hidden-sm item-highlight-title">
          Technology
        </h2>
      </div>

      <div class="">
        <p class="col-sm-12 col-md-6 item-description">
          ${work[item]["item-description"]}
        </p>
      </div>

      <div class="">
        <h2 class="col-sm-12 hidden-md hidden-lg item-highlight-title">
          Highlights
        </h2>
      </div>

      <div class="tech">
        <ul>
          <li class="col-sm-12 col-md-6 tech-items">`
          +
          work[item].tech.join( '</li> <li class="col-sm-12 col-md-6 tech-items">' )
          +
          `</li>
        </ul>
      </div>
    </div>

    <!-- end portfolio item -->`
  })
);
