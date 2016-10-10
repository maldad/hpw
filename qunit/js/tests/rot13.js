QUnit.test("Tests de Rot13", function(assert) {
    //letra H
    assert.strictEqual(
        Rot13.change("A"),
        "N",
        "A por N"
    );
    assert.strictEqual(
        Rot13.change("H"),
        "U",
        "H por U"
    );
    assert.strictEqual(
        Rot13.change("c"),
        "p",
        "c por p"
    );
    assert.strictEqual(
        Rot13.change("m"),
        "z",
        "m por z"
    );

    assert.strictEqual(
        Rot13.encrypt("H"),
        "U",
        "H por U"
    );

    assert.strictEqual(
        Rot13.encrypt("HOLA"),
        "UBYN",
        "HOLA por UBYN"
    );

    assert.strictEqual(
        Rot13.encrypt("Hola"),
        "Ubyn",
        "Hola por Ubyn"
    );
   
    assert.strictEqual(
        Rot13.encrypt("hOLA"),
        "uBYN",
        "hOLA por uBYN"
    );

    assert.strictEqual(
        Rot13.encrypt("hOlA"),
        "uByN",
        "hOlA por uByN"
    );

    assert.strictEqual(
        Rot13.encrypt(" h o l a"),
        " u b y n",
        " h o l a por  u b y n"
    );

    assert.strictEqual(
        Rot13.encrypt("  "),
        "  ",
        "   por   "
    );

    assert.strictEqual(
        Rot13.encrypt("HOLÑ"),
        "",
        'HOLÑ por ""'
    );

    assert.strictEqual(
        Rot13.encrypt("HO1A"),
        "",
        'HO1A por ""'
    );

    assert.strictEqual(
        Rot13.encrypt("HO@A"),
        "",
        'HO@A por ""'
    );

    assert.strictEqual(
        Rot13.encrypt("HO\nLA"),
        "UB\nYN",
        'HO\nLA por UB\nYN'
    );

    assert.strictEqual(
        Rot13.encrypt("HO\tLA"),
        "UB\tYN",
        'HO\tLA por UB\tYN'
    );

});
