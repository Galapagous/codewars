def score( dice )
    # get unique version
    total = 0
    unique = dice.uniq
    # iterate over unique
    for a in 0...unique.length
        count = dice.count(unique[a])
        if count >= 3
            division = count / 3                        #0N time
            case unique[a]  # was case obj.class        #0N space
            when 1
                total += (division * 1000)
            when 2
                total += (division * 200)
            when 3
                total += (division * 300)
            when 4
                total += (division * 400)
            when 5
                total += (division * 500)
            when 6
                total += (division * 600)
            else
              print('It is not a string or number')
            end
        end
        if unique[a] === 1 || unique[a] === 5
            modulus = count % 3
            unique[a] === 1 ? (total += (modulus * 100)) : (total += (modulus * 50))
        end
    end
end

score([2,4,4,5,4])