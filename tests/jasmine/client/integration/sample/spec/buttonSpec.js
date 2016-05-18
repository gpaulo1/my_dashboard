describe('clicking  the button', function () {
    //reset the counter before each test
    beforeEach(function () {
        Session.set('counter', 0);
    });

    it('should show how many times the button was pressed', function () {
        var text = $('#addAccount').text();

        $('addAccount').click();

        expect(text).toEqual()("You've pressed the button 1 times");
    })

});