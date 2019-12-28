<?php include './partials/head.php'; ?>
<?php include './partials/header.php'; ?>
<main>
    <section class="section intro active">
        <div class="container">
            <h1 class="headline headline--orange">Vartojimo paskola</h1>
            <h2 class="subtitle subtitle--brown">Paskolos, kurios padeda</h2>
            <p class="bodyTxt bodyTxt--brown">Vartojimo paskola pravers, jei planuojate atnaujinti namus, remontuoti automobilį, įsigyti naujų baldų, buitinės technikos, ar kitą brangesnį daiktą.</p>
            <ul class="list list--brown">
                <li>Paskola nuo 500 iki 20 000 Eur be užstato.</li>
                <li>Pinigus pervesime Jums į sąskaitą iš karto po sutarties sudarymo.</li>
                <li>Pasiskolintą sumą ar jos dalį galėsite grąžinti anksčiau laiko be papildomų mokesčių.</li>
            </ul>
            <a class="button" href="#" id="introBtn">Pildyti paraišką</a>
        </div>
    </section>
    <section class="section form">
      <div class="container">

        <div class="steps">
          <div class="steps__item active">1</div>
          <div class="steps__item">2</div>
          <div class="steps__item">3</div>
          <div class="steps__item">4</div>
        </div>

        <form action="/endpoint.php" class="form">

          <div class="form_wrapper">

              <fieldset class="msf_hide">
                  <h2 class="subtitle">Įveskite savo vardą ir pavardę</h2>
                <div>
                  <input type="text" name="firstname" placeholder="First Name">
                  <input type="text" name="lastname" placeholder="Last Name">
                </div>
                <div>
                  <input type="email" name="email" placeholder=" Your Email">
                </div>
                  <input type="button" name="back" value="Back"  onclick="msf_btn_back()">
                    <input type="button" name="next" value="Next"  onclick="msf_btn_next()">
                <div class="msf_bullet_o"></div>
                <div class="msf_line"></div>
              </fieldset>
              
              <fieldset class="msf_hide">
                  <h2>This is form 2</h2>
                  <input type="text" name="school" placeholder="School">
                  <input type="date" name="date" placeholder="Birthdate">
                <div>
                  <input type="radio" name="gender" value="male" checked> Male<br>
                  <input type="radio" name="gender" value="female"> Female<br>
                  <input type="radio" name="gender" value="other"> Other
                </div>
                <input type="button" name="back" value="Back"  onclick="msf_btn_back()">
                  <input type="button" name="next" value="Next"  onclick="msf_btn_next()">
                <div class="msf_bullet_o"></div>
                <div class="msf_line"></div>
              </fieldset>
              
              <fieldset class="msf_hide">
                  <h2>The last form</h2>
                  <input type="text" name="name" placeholder="Name">
                  <input type="email" name="email" placeholder="Email">
                <input type="button" name="back" value="Back"  onclick="msf_btn_back()">
                <input type="button" name="next" value="Next"  onclick="msf_btn_next()">
                  <input type="submit" name="submit" value="Submit Now!" onclick="">
                <div class="msf_bullet_o"></div>
                <div class="msf_line"></div>
              </fieldset>

          </div>

        </form>

      </div>
    </section>
    <section class="section summary">
      <div class="container">
        This is your summary
      </div>
    </section>
</main>

<?php include './partials/footer.php'; ?>
<?php include './partials/foot.php'; ?>
