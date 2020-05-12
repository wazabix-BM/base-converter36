function Conversion (number, base) {
  this.number = number;
  this.base = base;

  let Prototype = undefined;

  this.toBase = ($base) => {
    this.$base = $base;

    if (this.base === 10 && typeof this.number !== 'number') {
      this.number = parseInt (this.number);
    }

    if (this.base !== 10 && typeof this.number !== "string") {
      this.number = this.number.toString ();
    }

    if (this.$base > 36) {
      throw new Error ('This package can only convert up to a base of 36');
    }

    if (this.$base < 2) {
      throw new Error ("The unary system is not translated by the package");
    }

    if (this.base === 10) {
      Prototype = this.number.toString (this.$base);
    }

    if (this.base !== 10) {
      let stp = parseInt (this.number, this.base);
      Prototype = stp.toString (this.$base);

      if (this.$base === 10) {
        Prototype = parseInt (Prototype);
      }
    }
    
    return Prototype;
  }
}

module.exports = Conversion;
