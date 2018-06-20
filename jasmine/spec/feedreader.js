/* Placing all tests within the $() function to ensure they run when the DOM is ready to go */
$(function() {
    describe('RSS Feeds', function() {

         /* Making sure the rssfeeds isn't empty */
        it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
        });

        /* Making sure the url isn't empty and works */
        it('URL is available', function() {
        allFeeds.forEach(function(feed) {
        let feedUrlLength = feed.url.length;
        expect(feed.url).toBeDefined();
        expect(feedUrlLength).not.toBe(0);
            });
        });

        /* Preventing empty name field */
        it('Name field is filled', function() {
        allFeeds.forEach(function(feed) {
        let feedNameLength = feed.name.length;
        expect(feed.name).toBeDefined();
        expect(feedNameLength).not.toBe(0);
                });
             });
          });

/* New test suite called 'The menu' */
    describe('The menu', function() {
        
       /* Menu has to be hidden by default */
        it('closed hamburger', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
        /* Test to ensure the hamburger menu wil open and closes when you clicked it */
        it('changes the visibility', function() {
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(true);
        });

/* New test suite called "Initial Entries". */
    describe('Initial entries', function() {
        
        /* Checking on feed information and if it's loaded */
        beforeEach(function(done) {
        loadFeed(0, done);
        });
        it('there is at least a single .entry element within the .feed container', function() {
        expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

/*  New test suite called "New Feed Selection". */
    describe('New feed selection', function() {
        // create variables for the feeds
        let firstFeed;
        let secondFeed;
        
        /* Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. */
            beforeEach(function(done) {
            loadFeed(0, function() {
            firstFeed = $('.feed').html();
            loadFeed(1, function() {
            secondFeed = $('.feed').html();
            done();
            });
        });
    });
    // check if both of the feeds are the same or not
    it('New feed loaded',function(done) {
        expect(firstFeed).not.toEqual(secondFeed);
        done();
        });
    });
});
}());