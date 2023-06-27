if birthM < currentM (b'day is passed)
    ageY: difference in years 
    if birthD < currentD
        ageM: currentM - birthM (includes this month)
        ageD: currentD - birthD
    if birthD > currentD
        ageM: currentM - birthM - 1 (excludes this month)
        ageD: remaining days of previous month + currentD (count from previous month's date)
            remaining days for April, June, Sep, Nov (previous month): 30 - birthD
            remaining days for Feb (previous month):
                if a leap year: 29 - birthD
                else: 28 - birthD
            remaining days for all other previous months: 31 - birthD
    birthD = currentD 
        ageM is currentM - birthM (exactly)
        ageD =0

if birthM > currentM (b'day hasn't come yet)
    ageY: difference in years - 1 
    if birthD < currentD
        ageM: (12 - birthM) + currentM (count from last year's b'day)
        ageD: currentD - birthD
    if birthD > currentD
        ageM: (12 - birthM) + currentM - 1 (excludes current month)
        ageD: remaining days of previous month + currentD (count from previous month's date)
            remaining days for April, June, Sep, Nov (previous month): 30 - birthD
            remaining days for Feb (previous month):
                if a leap year: 29 - birthD
                else: 28 - birthD
            remaining days for all other previous months: 31 - birthD
    birthD = currentD 
        ageM: (12 - birthM) + currentM (exactly)
        ageD =0

if birthM = currentM (age depend on the date)
    if birthD < currentD 
        ageY: difference in years
        ageM: 0
        ageD: currentD - birthD

    if birthD > currentD
        ageY: difference in years -1
        ageM: 11
        ageD: remaining days of previous month + currentD (count from previous month's date)
            remaining days for April, June, Sep, Nov (previous month): 30 - birthD
            remaining days for Feb (previous month):
                if a leap year: 29 - birthD
                else: 28 - birthD
            remaining days for all other previous months: 31 - birthD
    
    if birthD = currentD
        ageY: difference in years (exactly)
        ageM: 0
        ageD: 0

