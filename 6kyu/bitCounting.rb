def bitCounter n
  count = 0
  n.to_s(2).split("").each do |a|
    a.to_i == 1 && (count += 1)
  end
p count
end