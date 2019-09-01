const puppeteer = require('puppeteer');

(async () => {
    try {

        let craURL = 'https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/payroll-deductions-online-calculator.html'

        let width = 1500
        let height = 1500
    
        let browser = await puppeteer.launch({headless: false, args: [`--window-size=${width},${height}`]});
        let page = await browser.newPage();
        
        await page.setViewport({ width: width, height: height, deviceScaleFactor: 1 })
        // Get the "viewport" of the page, as reported by the page.
        const dimensions = await page.evaluate(() => {
            return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
            };
        });

        await page.goto(craURL);
        await page.click('a.btn-primary');

        await page.waitFor('input[id="welcome_calculationTypeSALARY"]');
        await page.click('input[id="welcome_calculationTypeSALARY"]');

        await page.waitFor('input[id="welcome_button_next"]');
        await page.click('input[id="welcome_button_next"]');
        
        await page.waitFor('input[id="employeeName"]');
        let employeeName = 'Nigel Rodrigues';
        await page.$eval('input[id="employeeName"]', (el, value) => el.value = value, employeeName);
        
        await page.waitFor('input[id="employerName"]');
        let employerName = 'Edo Japan';
        await page.$eval('input[id="employerName"]', (el, value) => el.value = value, employerName);
        
        await page.waitFor('select[id="jurisdiction"]');
        let province = 'ALBERTA';
        await page.select('#jurisdiction', province);
        
        await page.waitFor('select[id="payPeriodFrequency"]');
        let payPeriodFrequency = 'SEMI_MONTHLY';
        await page.select('#payPeriodFrequency', payPeriodFrequency);

        await page.waitFor('select[id="datePaidYear"]');
        let datePaidYear = '2020';
        await page.select('#datePaidYear', datePaidYear);
        
        await page.waitFor('select[id="datePaidMonth"]');
        let datePaidMonth = '01';
        await page.select('#datePaidMonth', datePaidMonth);
        
        await page.waitFor('select[id="datePaidDay"]');
        let datePaidDay = '05';
        await page.select('#datePaidDay', datePaidDay);

        await page.waitFor('input[id="payrollDeductionsStep1_button_next"]');
        await page.click('input[id="payrollDeductionsStep1_button_next"]');
        
        await page.waitFor('input[id="incomeAmount"]');
        let payperiodSalary = '1500';
        await page.$eval('input[id="incomeAmount"]', (el, value) => el.value = value, payperiodSalary);
        
        await page.waitFor('input[id="vacationPay"]');
        let vacationPay = '100';
        await page.$eval('input[id="vacationPay"]', (el, value) => el.value = value, vacationPay);

        // bonus?
        // aboriginal?

        await page.waitFor('input[id="payrollDeductionsStep2a_button_next"]');
        await page.click('input[id="payrollDeductionsStep2a_button_next"]');

        // tax deductions?
        // cpp exempt?
        // ei exempt?
        // ei rate change?

        await page.waitFor('input[id="payrollDeductionsStep3_button_calculate"]');
        await page.click('input[id="payrollDeductionsStep3_button_calculate"]');
        
    } catch (e) {
        console.log('error',e);
    }


})();