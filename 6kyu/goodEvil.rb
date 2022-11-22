def good_vs_evil(good, evil)
  draw = "Battle Result: No victor on this battle field"
  gwin = "Battle Result: Good triumphs over Evil"
  ewin = "Battle Result: Evil eradicates all trace of Good"
  good_count = good.split(" ")
  evil_count = evil.split(" ")
  gsum = 0
  good_count.each do | a |
    gsum += a.to_i
    end
  bsum = 0
  evil_count.each do | b |
    bsum += b.to_i
    end
  if gsum > bsum 
    return gwin
    elsif bsum > gsum 
    return ewin
    else
    return draw
    end
end
